<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right">
      <button class="btn btn-primary my-3" @click="openModel(true)">
        建立新的产品
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" width="120">分类</th>
          <th scope="col">产品名称</th>
          <th scope="col" width="120">原价</th>
          <th scope="col" width="120">售价</th>
          <th scope="col" width="100">是否启用</th>
          <th scope="col" width="100">编辑</th>
          <th scope="col" width="100">删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">启用</span>
            <span v-else>未启用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModel(false, item)"
            >
              编辑
            </button>
          </td>
          <td>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModel(item)"
            >
              删除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation ">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ disabled: !pagination.has_pre }"
            @click.prevent="getProducts(pagination.current_page - 1)"
          >
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="page in pagination.total_pages"
            :key="page"
            :class="{ active: pagination.current_page == page }"
            @click.prevent="getProducts(page)"
          >
            <a class="page-link " href="#">{{ page }}</a>
          </li>

          <li
            class="page-item"
            :class="{ disabled: !pagination.has_next }"
            @click.prevent="getProducts(pagination.current_page + 1)"
          >
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span></span>新增产品
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">输入图片网址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="请输入图片链接"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上传图片
                    <i
                      class="fa fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt
                  :src="tempProduct.imageUrl"
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">标题</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="请输入标题"
                    v-model="tempProduct.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分类</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="请输入分类"
                      v-model="tempProduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">单位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="请输入单位"
                      v-model="tempProduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原价</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="请输入原价"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售价</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="请输入售价"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">产品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="请输入产品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">产品说明</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="请输入产品说明内容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否启用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              确认
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
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
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger">確認刪除</button>
          </div>
        </div>
      </div>
    </div>-->
    <!-- deleteModel -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">删除产品信息</h5>
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
            是否确认删除本条产品信息？
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消删除
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="deleteProduct"
            >
              确认删除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end deleteModel -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data: function() {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
      pagination: {},
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/admin/products?page=${page}`;
      console.log(api);
      const vm = this;
      console.log(process.env);
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        console.log("管理端获取所有商品信息", response.data);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModel(isNew, item) {
      $("#productModal").modal("show");
      if (isNew) {
        this.isNew = true;
        this.tempProduct = {};
      } else {
        this.isNew = false;
        this.tempProduct = Object.assign({}, item);
      }
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/admin/product`;
      let httpMethod = "post";
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = "put";
      }
      console.log(api);
      const vm = this;
      console.log(process.env);
      vm.isLoading = true;
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        vm.isLoading = false;
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.getProducts();
        } else {
          $("#productModal").modal("hide");
          vm.getProducts();
          console.log("新增产品信息失败。");
        }
        console.log(vm.products);
      });
    },
    openDeleteModel(item) {
      $("#deleteModal").modal("show");
      this.tempProduct = Object.assign({}, item);
    },
    deleteProduct() {
      const id = this.tempProduct.id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/admin/product/${id}`;
      console.log(api);
      const vm = this;
      console.log(process.env);
      vm.isLoading = true;
      this.$http.delete(api).then((response) => {
        vm.isLoading = false;
        console.log("删除产品返回信息", response.data);
        $("#deleteModal").modal("hide");
        vm.getProducts();
      });
    },
    uploadFile() {
      console.log(this);
      const vm = this;
      const uploadFile = this.$refs.files.files[0];
      let formData = new FormData();
      formData.append("file-to-upload", uploadFile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/admin/upload`;
      vm.status.fileUploading = true;
      this.$http
        .post(url, formData, {
          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          vm.status.fileUploading = false;
          console.log(response.data);
          if (response.data.success) {
            // vm.tempProduct.imgUrl=response.data.imageUrl;
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
          } else {
            vm.$bus.$emit("alert-message", response.data.message, "danger");
            console.log(response.data.message);
          }
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
