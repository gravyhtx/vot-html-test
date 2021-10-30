import React from 'react';
import {Button, Select, Switch, Checkbox} from 'react-materialize';

const AdminCreateProduct = (props) => {

    // function getSizes() {
        // for(let i=0; i < props.color.length; i++) {
        //     console.log(props.color[i]);
            
        // }
    // }
    const vendorInputTextHandler = (e) => {
        props.setVendorName(e.target.value)
    }
    const designInputTextHandler = (e) => {
        props.setDesignName(e.target.value)
    }
    const typeInputTextHandler = (e) => {
        props.setTypeName(e.target.value)
    }

    let productId = 0
    let title = props.vendorName + " " + props.designName + " " + props.typeName
    let filename = props.vendorName.toLowerCase() + "_" + props.designName.toLowerCase() + "_" + props.typeName.toLowerCase()
    let colors = props.color
    let sizes = props.size
    let gender = props.gender
    let physical = true


    const submitProductHandler = (e) => {
        e.preventDefault()
        let data = {
            productId: productId,
            title: title,
            filename: filename,
            colors: colors,
            sizes: sizes,
            gender: gender,
            physical: physical
        }
        
        props.setProductLine([
            ...props.productLine, {
                title: title,
                filename: filename,
                colors: colors,
                sizes: sizes,
                gender: gender,
                physical: physical
            }
        ])
        console.log(props.productLine)
    }

        // productLines.map(productLine => {

        // })
    

    return (
        <div className="container-fluid row">
            <div className="spacer" />
            {/* <!-- Container 01 --> */}
                <div className="admin-dashboard_add-item col s12">
                    <div className="container darken-3">
                    
                    <form className="create-product-container">
                        <h1 className="create-product-header container">{title}</h1>
                        <div className="spacer" />
                        <div className="row create-product-row">
                            <div className="col s2 center black create-row1">
                            <div>VENDOR</div>
                            {/* <input onChange={vendorInputTextHandler} className="box-85 center-text" type="text" placeholder="" name="name" /> */}
                                <Select
                                // function noRefCheck(){}; 
                                    multiple={false}
                                    onChange={vendorInputTextHandler}
                                    id="select-vendor"
                                    className="box-85 select-opt center"
                                    options={{
                                        classes: '',
                                        dropdownOptions: {
                                        alignment: 'left',
                                        autoTrigger: true,
                                        closeOnClick: true,
                                        constrainWidth: true,
                                        coverTrigger: true,
                                        hover: false,
                                        inDuration: 150,
                                        onCloseEnd: null,
                                        onCloseStart: null,
                                        onOpenEnd: null,
                                        onOpenStart: null,
                                        outDuration: 250
                                        }
                                    }}
                                    value=""
                                    >
                                    <option
                                        disabled
                                        value=""
                                    >
                                        
                                    </option>
                                    <option name="VoT" value="VoT">
                                        VoT
                                    </option>
                                    </Select>
                            </div>
                        
                            <div className="col s3 center black create-row1">
                            <div>NAME</div>
                            <input onChange={designInputTextHandler} className="box-85 center" type="text" placeholder="" name="name" />
                            </div>

                            <div className="col s3 center black create-row1">
                            <div>TYPE</div>
                            <input onChange={typeInputTextHandler} className="box-85 center" type="text" placeholder="" name="name" />
                            </div>

                            <div className="col s4 center black create-row1">
                                <div>COLORS</div>
                                {/* <input className="box-85" type="text" name="name" /> */}
                                <Select
                                    id="select-colors"
                                    className="box-85 select-opt center"
                                    multiple
                                    options={{
                                        classes: '',
                                        dropdownOptions: {
                                        alignment: 'left',
                                        autoTrigger: true,
                                        closeOnClick: true,
                                        constrainWidth: true,
                                        coverTrigger: true,
                                        hover: false,
                                        inDuration: 150,
                                        onCloseEnd: null,
                                        onCloseStart: null,
                                        onOpenEnd: null,
                                        onOpenStart: null,
                                        outDuration: 250
                                        }
                                    }}
                                    value={[
                                        ''
                                    ]}
                                    >
                                    <option
                                        disabled
                                        value=""
                                    >
                                    </option>
                                    <option value="1">
                                        Black
                                    </option>
                                    <option value="2">
                                        White
                                    </option>
                                    <option value="3">
                                        Red
                                    </option>
                                    <option value="4">
                                        Navy Blue
                                    </option>
                                    <option value="5">
                                        Green
                                    </option>
                                </Select>
                            </div>
                        </div>
                        <div className="row create-product-row">
                            <div className="col s4 center create-row2 black phys-dig">
                                <Switch
                                    className="black"
                                    id="physical-digital_switch"
                                    offLabel="Physical"
                                    onChange={function noRefCheck(){}}
                                    onLabel="Digital"
                                />
                            </div>
                            <div className="col s4 center create-row2 black">
                                <Select
                                    multiple={false}
                                    id="select-colors create-product_gender"
                                    className="box-85 black"
                                    options={{
                                        classes: '',
                                        dropdownOptions: {
                                        alignment: 'left',
                                        autoTrigger: true,
                                        closeOnClick: true,
                                        constrainWidth: true,
                                        coverTrigger: true,
                                        hover: false,
                                        inDuration: 150,
                                        onCloseEnd: null,
                                        onCloseStart: null,
                                        onOpenEnd: null,
                                        onOpenStart: null,
                                        outDuration: 250
                                        }
                                    }}
                                    value=""
                                    >
                                    <option
                                        disabled
                                        value="Unisex"
                                    >
                                        
                                    </option>
                                    <option value="1">
                                        Unisex
                                    </option>
                                    <option value="2">
                                        Men's
                                    </option>
                                    <option value="3">
                                        Women's
                                    </option>
                                </Select>
                            </div>
                            <div className="col s4 center black create-row2 create-sizes-check">
                                <Checkbox
                                    checked
                                    filledIn
                                    id="size_s"
                                    label="S"
                                    value="S"
                                /> &emsp;
                                <Checkbox
                                    checked
                                    filledIn
                                    id="size_m"
                                    label="M"
                                    value="M"
                                /> &emsp;
                                <Checkbox
                                    checked
                                    filledIn
                                    id="size_l"
                                    label="L"
                                    value="L"
                                /> &emsp;
                                <Checkbox
                                    checked
                                    filledIn
                                    id="size_xl"
                                    label="XL"
                                    value="XL"
                                />
                            </div>
                        </div>
                        <div className="spacer row" />
                        <div className="submit-new-product row">
                            <div className="col s5 add-product" />
                            <Button
                                onClick={submitProductHandler}
                                className="col s2 center-text black admin_add-product"
                                type="submit">
                            ADD PRODUCT
                            </Button>
                            <div className="col s5" />
                        </div>

                    </form>

                    <div className="spacer" /><div className="spacer" />

                    </div>
                </div>
                
            {/* <!-- Container 01 --> */}
        </div>
    )
}

export default AdminCreateProduct;