import { InputBox } from '../../components';

function processJson(demoData){
    let styles = {
        inputStyle: {
        width: "100%",
        marginTop:"5px",
        marginBottom:"5px"
    }};
    demoData.map((data, index) => {
        for(var i=0; i < data.legth; i++) {
            if(data['type'] === "text") {
                return (<InputBox style={styles.inputStyle} placeholder={data.label} />);
            }            
        }
    })
}