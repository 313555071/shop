<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
            @click="getProduct(item.id)"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <!-- <div class="h5">2,800 元</div> -->
              <del class="h6">原價 {{ item.origin_price }} 元</del>
              <div class="h5">現在只要 {{ item.price }} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click.prevent="getProduct(item.id)"
            >
              <i
                class="fa fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtoCart(item.id)"
            >
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- model -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card border-0 shadow-sm">
              <div
                style="height: 400px; background-size: cover; background-position: center"
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
              ></div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{
                  product.category
                }}</span>

                <p class="card-text">{{ product.content }}</p>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
                  <!-- <div class="h5">2,800 元</div> -->
                  <del class="h6">原價 {{ product.origin_price }} 元</del>
                  <div class="h5">現在只要 {{ product.price }} 元</div>
                </div>
                <div class="form-inline justify-content-end">
                  <label for="shuliang">数量:</label>
                  <input
                    type="number"
                    class="form-control-small "
                    id="shuliang"
                    min="1"
                    v-model="qty"
                  />{{ product.unit }}
                </div>
              </div>

              <div class="card-footer d-flex">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-auto"
                  @click="addtoCart(product.id, qty)"
                >
                  <i
                    class="fa fa-spinner fa-spin"
                    v-if="status.loadingItem === product.id"
                  ></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end model -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      products: [],
      isLoading: false,
      product: {},
      status: {
        loadingItem: "",
      },
      qty: 1,
    };
  },
  methods: {
    getAllProducts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/products/all`;
      const vm = this;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        console.log("客户端所用商品信息", response.data);
        vm.products = response.data.products;
      });
    },
    getProduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/product/${id}`;
      const vm = this;
      this.status.loadingItem = id;
      this.$http.get(api).then((response) => {
        $("#productModal").modal("show");
        console.log("客户端单个商品信息", response.data);
        vm.product = response.data.product;
        this.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/cart`;

      this.status.loadingItem = id;
      this.$http
        .post(api, { data: { product_id: id, qty } })
        .then((response) => {
          console.log("加入购物车返回信息", response.data);
          $("#productModal").modal("hide");
          this.status.loadingItem = "";
        });
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>
