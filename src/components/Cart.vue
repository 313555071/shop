<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <table class="table">
      <thead>
        <th></th>
        <th>品名</th>
        <th>数量</th>
        <th>单价</th>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.id">
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
          <td class="align-middle">
            {{ item.product.title }}
            <!-- <div class="text-success" v-if="item.coupon">
          已套用優惠券
        </div> -->
          </td>
          <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
          <td class="align-middle text-right">{{ item.final_total }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">总计</td>
          <td class="text-right">{{ cart.total }}</td>
        </tr>
        <tr>
          <td colspan="3" class="text-right text-success">折扣價</td>
          <td class="text-right text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm">
      <input type="text" class="form-control" placeholder="請輸入優惠碼" />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">
          套用優惠碼
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: {},
      isLoading: false,
    };
  },
  methods: {
    getCartList() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/cart`;

      this.isLoading = true;

      this.$http.get(api).then((response) => {
        console.log("获取购物车信息", response.data.data);
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    removeCartItem(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/cart/${id}`;
      this.$http.delete(api).then((response) => {
        console.log("获取删除购物车单条信息", response.data);
        this.getCartList();
      });
    },
  },
  created() {
    this.getCartList();
  },
};
</script>
