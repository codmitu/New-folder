import useAsync from '../useAsync';
import List from './List';

export default function Main() {
    const { data, loading } = useAsync('https://shopping-list-bc921-default-rtdb.europe-west1.firebasedatabase.app/');

    console.log(data);
    return (
        <div className="main">
            <div>sdasdasd</div>
            <div>sdasdasd</div>
            <div>sdasdasd</div>
            <div>sdasdasd</div>
            {loading && <div style={{ fontSize: "2rem", color: "red" }}>Loading...</div>}
            {data && <List data={data} />}
        </div>
    )
}