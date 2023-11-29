export function ReviewStep() {
    return (
        <div className="p-8 bg-gray-800 rounded-lg my-8">
            <strong> Information Review </strong>
            <table className="w-full  mt-4">
                <tr className="border-dashed border-b-2 border-gray-600 border-separate">
                    <td className="border-separate py-3"> First Name </td>
                    <td className="border-separate py-3 text-right"> Jonathan </td>
                </tr>
                <tr className="border-dashed border-b-2 border-gray-600 border-separate">
                    <td className="border-separate py-3"> Last Name </td>
                    <td className="border-separate py-3 text-right"> Aviar </td>
                </tr>
                <tr className="border-dashed border-b-2 border-gray-600 border-separate">
                    <td className="border-separate py-3"> Email Adress </td>
                    <td className="border-separate py-3 text-right"> jonaviar@email.com.us </td>
                </tr>
                <tr className="border-dashed border-b-2 border-gray-600 border-separate">
                    <td className="border-separate py-3"> Location </td>
                    <td className="border-separate py-3 text-right"> United States </td>
                </tr>
                <tr className="border-dashed border-b-2 border-gray-600 border-separate">
                    <td className="border-separate py-3"> Date of Birth </td>
                    <td className="border-separate py-3 text-right"> Thomás Dixini </td>
                </tr>
                <tr className="border-separate">
                    <td className="border-separate py-3"> First Name </td>
                    <td className="border-separate py-3 text-right"> Thomás Dixini </td>
                </tr>
            </table>
        </div>
    );
}