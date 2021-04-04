import DropDown from '../components/Dropdown';

function Dashboard() {
    function onSelect(id) {
        console.log(id)
    }
    const DropDownUI = new DropDown({
        data: ['abc', 'def', 'ghi'],
        onSelect,
        title: 'Select Item',
    });
    return DropDownUI.getUI();
}

export default Dashboard;
