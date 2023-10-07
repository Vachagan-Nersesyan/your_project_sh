import {Form} from 'react-bootstrap';
export default function LittleInputs(){
    return(
        <div style={{ display:'flex', justifyContent:'flex-start', alignItems:'center', marginLeft:'225px', marginTop:'100px'}}>
          <div style={{width: '200px', marginLeft:'500px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{width: '70px'}}>
                Filter:
            </div>
            <Form.Select aria-label="Default select example">
                <option>All</option>
                
                
            </Form.Select>
        </div>
        <div style={{width: '200px', marginLeft:'100px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
            <div style={{width: '70px'}}>
                Sort:
            </div>
            <Form.Select aria-label="Default select example">
            <option>Added date</option>
            </Form.Select>
        </div>






        </div>
        
    )
}