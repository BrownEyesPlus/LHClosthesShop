import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { getProducts, updateProduct } from "../../redux/apiCalls";

export default function Product() {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  
  // const [inStock, setInStock] = useState();
 
  
  
  // useEffect(() => {
  //   getProducts(dispatch);
  // }, [dispatch]);

  const test = (e,id) => {
    e.preventDefault();
    updateProduct(id, dispatch, { title, desc, price });
    console.log(title+desc+price + " " + id);
  }
  const handleClick = ( id) => {
    // e.preventDefault();
    updateProduct(id, dispatch, { title, desc, price });
    console.log(title+desc+price + " " +id);
  };

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Sản phẩm</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Tạo mới</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Tên sản phẩm</label>
            <input type="text" placeholder={product.title} 
            onChange={(e) => setTitle(e.target.value)}
            />
            <label>Miêu tả sản phẩm</label>
            <input type="text" placeholder={product.desc} 
            onChange={(e) => setDesc(e.target.value)}
            />
            <label>Giá</label>
            <input type="text" placeholder={product.price} 
            onChange={(e) => setPrice(e.target.value)}
            />
            <label>Còn hàng</label>
            <select name="inStock" id="idStock" 
            onChange={(e) =>console.log(e.target.value)}
            >
              <option value="true">Còn</option>
              <option value="false">Hết</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={()=>handleClick(product._id)}>Cập nhật</button>
            <button className="" type="text" onClick={() =>test(product._id)}>Test</button>
          </div>
        </form>
      </div>
    </div>
  );
}
