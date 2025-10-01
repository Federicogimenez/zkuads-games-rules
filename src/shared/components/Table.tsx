interface TableRowProps{
    name: string;
    detail: string;
    points: string;
}

interface TableProps{
    header: TableRowProps;
    rows: TableRowProps[];
    color_header?: string;
    color_rows?: string;
}
export default function Table({ 
    header, 
    rows, 
    color_header='bg-orange-secondary',
    color_rows='even:bg-orange-primary/30 odd:bg-orange-secondary/20',
    }: TableProps) {
  return (
    <div className="relative w-11/12 mx-auto rounded-xl overflow-hidden shadow-box-lg shadow-black">
        <table className="w-full table-auto">
            <thead>
                <tr className={`text-xl md:text-2xl xl:text-3xl ${color_header}`}>
                    <th>
                        {header.name}
                    </th>
                    <th>
                        {header.detail}
                    </th>
                    <th>
                        {header.points}
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(({ name, detail, points })=>{
                        return <tr className={`text-xs md:text-lg transition-all hover:bg-black/50 ${color_rows}`}>
                                    <td className="tracking-wide font-semibold">
                                        {name}   
                                    </td>
                                    <td>
                                        {detail}   
                                    </td>
                                    <td className="font-bold xl:text-xl">
                                        {points}   
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
