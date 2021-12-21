import makeBlockie from "ethereum-blockies-base64";

const Blockie = ( address ) => {

    // const container = document.getElementById('b-container')
    // container.style.backgroundImage = `url(${makeBlockie(address)})`;
    console.log(makeBlockie(address))
    return (
        <div id="b-container"></div>
    )
}

export default Blockie;