export default function ReportTable(props) {
  let hours = props.hours.map((hour)=><th>{hour}</th>)
  if (props.reports){
    var reports = JSON.parse(props.reports)
    var hourly_sales = reports["hourly_sales"].map((sale)=><td className="pd-4">{sale}</td>) 
    var location  = reports["Location"]
  }
   console.log(location) 
  return (
    <table className="table ">
      <thead className="table-header-group">
        <th>Location</th>
        {hours}
        <th>Totals</th>
        </thead>
      <tbody className="bg-green-300">
      <tr className="border border-black">
        <td>
        {location}
        </td>
        {hourly_sales}
      </tr>
      <tr className="border border-black">
          
      </tr>
      </tbody>
      <tfoot className="bg-green-500 border border-black">
        <td>Totals</td>
      </tfoot>
    </table>
  )
}