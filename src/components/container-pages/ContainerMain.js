import React, {useEffect, useState} from 'react';


let yesOrNot = [
	{id: 0, name: 'optradio', title: 'Այո', checked: false},
	{id: 1, name: 'optradio', title: 'Ոչ', checked: false}
]

let estimate = [
	{id: 0, name: 'optradio', title: 'Վատ', checked: false},
	{id: 1, name: 'optradio', title: 'Բավարար', checked: false},
	{id: 2, name: 'optradio', title: 'Բավարար', checked: false},
	{id: 3, name: 'optradio', title: 'Լավ', checked: false},
	{id: 4, name: 'optradio', title: 'Շատ լավ', checked: false},
	{id: 6, name: 'optradio', title: 'Գերազանց', checked: false}
]

function ContainerMain(prop) {
	let [ysOrNt, setYesOrNot] = useState(null)
	let [estimateId, setEstimateId] = useState(null)

	function yesOrNOte(id) {
		yesOrNot.forEach(v => v.id === id ? v.checked = true : v.checked = false)
		ysOrNt = id
		setYesOrNot(ysOrNt)
	}

	function estimateID(id) {
		estimate.forEach(a => a.id === id ? a.checked = true : a.checked = false)
		estimateId = id
		setEstimateId(estimateId)
	}

	useEffect(() => {
		prop.getMainData([
			{id: 5, data: ysOrNt},
			{id: 6, data: estimateId}
		])
		if (prop.clearData) {
			yesOrNot.forEach(v => v.checked = false)
			estimate.forEach(v => v.checked = false)
		}
	})

	return (
		<>
			<div className="row planavorum_eq ">
				<form className="col-sm-12">
					<h5>5. Պլանավորում եք արդյո՞ք շարունակել մասնագիտանալ ծրագրավորմամբ։</h5>
					{yesOrNot.map(v => (
						<div className="form-check" key={v.id}>
							<label className="form-check-label">
								<input
									type="radio"
									className="form-check-input"
									name={v.name}
									onChange={() => yesOrNOte(v.id)}
								/>{v.title}
							</label>
						</div>
					))}
				</form>
			</div>
			<div className="row gnahateq">
				<form className="col-sm-12">
					<h5>6. Գնահատե՛ք Ձեր առաջընթացը։</h5>
					{estimate.map(v => (
						<div className="form-check" id="hoverinp" key={v.id}>
							<label className="form-check-label">
								<input
									name={v.name}
									type="radio"
									onChange={() => estimateID(v.id)}
									className="form-check-input"
								/>{v.title}
							</label>
						</div>
					))}
				</form>
			</div>

		</>
	);

}

export default ContainerMain;
