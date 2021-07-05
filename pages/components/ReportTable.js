export default function ReportTable(props) {
  let hours = props.hours && props.hours.map((hour) => <th>{hour}</th>)

  let reports = props.reports && props.reports.map((obj) => JSON.parse(obj.result)) || []
  console.log(reports)
  return (
    <table className="table ">
      <thead className="table-header-group">
        <tr>
          <th>Location</th>
          {hours}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody className="bg-green-300">
        {
          reports.map(obj =>
            <tr key={`${Date.now()}`} className="border border-black">
              <td>
                {obj.Location}
              </td>
              {obj.hourly_sales.map((sale) => <td className="pd-4">{sale}</td>)}
              <td>{obj["hourly_sales"].reduce((sum, num) => sum + num)}</td> {/*total*/}
            </tr>
          )
        }
      </tbody>
      <tfoot className="bg-green-500 border border-black">
        <tr>
          <th>Totals</th>

        </tr>
      </tfoot>
    </table>
  )
}