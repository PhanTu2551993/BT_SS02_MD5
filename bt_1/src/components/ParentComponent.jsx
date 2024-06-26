import ChildrenComponent from "./ChildrenComponent";

function ParentComponent(props) {
    const company = "rikkei Academy";
    const userName = "Nguyễn Văn A";
    const jobName = props.jobName
    return ( 
        <dir>
        <div>ParentComponent</div>
        <ChildrenComponent company={company} userName={userName} jobName={jobName}/>
        </dir>
     );
}

export default ParentComponent;