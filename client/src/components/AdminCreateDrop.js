import React, {useState} from 'react';
import AdminNav from './modules/AdminNav';
import AdminCreateProduct from './modules/AdminCreateProduct'
import AdminCreateInventory from './modules/AdminCreateInventory'

const AdminCreateDrop = () => {

        const props = { 
          collections: 1,
          vendors: "VoT",
          types: ["Tee", "Hoodie", "Long Sleeve", "Sweatshirt", "Women's Tee"],
          sizes: ["S", "M", "L", "XL"],
          colors: ["Black", "White", "Red", "Green", "Aqua"],
          gender: ["U", "M", "F"],
        };

        // let physical = true;

        const [vendorName, setVendorName] = useState("Add New Product");
        const [designName, setDesignName] = useState("");
        const [typeName, setTypeName] = useState("");
        const [productLine, setProductLine] = useState([

        ])
        return (
            <div className="admin-dashboard">
                <AdminNav />
                <div className="spacer" />
                <div className="spacer" />
                <AdminCreateProduct
                  vendorName = {vendorName}
                  setVendorName = {setVendorName}
                  designName = {designName}
                  setDesignName = {setDesignName}
                  typeName = {typeName}
                  setTypeName = {setTypeName}
                  productLine = {productLine}
                  setProductLine = {setProductLine}
                  vendor = {props.vendors}
                  type = {props.types}
                  size = {props.sizes}
                  color = {props.colors}
                  gender = {props.gender}
                  collections = {props.collections}
                />
                <AdminCreateInventory
                  collections = {props.collections}
                />
                <br/><br/><br/>
            </div>
        )      
}

export default AdminCreateDrop;