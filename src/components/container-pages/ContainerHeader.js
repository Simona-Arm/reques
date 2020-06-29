import React, {useState, useEffect} from 'react';
import teacher2 from '../../asets/image/teacher2.jpg'
import teacher3 from '../../asets/image/teacher 3.jpg'
import teacher4 from '../../asets/image/teacher 4.jpg'

let headerYesOrNOt = [
	{id: 0, name: 'optradio', title: 'Այո', checked: false},
	{id: 1, name: 'optradio', title: 'Ոչ', checked: false}
]

function ContainerHeader(prop) {
	let [rangInp, setRangInp] = useState('0');
	let [isYes, setIsYes] = useState(null);
	let [choose, setChoose] = useState(null);
	let [teacherImg, setTeacherImg] = useState([
		{path: teacher2, color: 'white'},
		{path: teacher3, color: 'white'},
		{path: teacher4, color: 'white'},
	])

	function checkedOr(data, id) {
		headerYesOrNOt.filter(v => v.id === id ? v.checked = true : v.checked = false)
		setIsYes(id)
	}

	function imageClick(i) {
		teacherImg = teacherImg.filter((val, ind) =>
			ind === i ? val.color = '#00bf6f'
				: val.color = 'white')
		setTeacherImg(teacherImg)
		setChoose(i)
	}

	function ubd() {
		setRangInp('0')
		setIsYes(null)
		setChoose(null)
	}

	useEffect(() => {
		prop.getHeaderData([
			{id: 1, data: rangInp,},
			{id: 2, data: isYes,},
			{id: 3, data: choose,}
		])
		if (prop.clearData) {
			headerYesOrNOt.forEach(v => v.checked = false)
			ubd()
			prop.update(false)
		}
	})

	return (
		<>
			<div className="row container1">
				<div className="col-sm-12">
					<h3 className="h3  scroll">Հարցում - Գոհ ե՞ք մեր ծառայություններից </h3>
				</div>
			</div>
			<div className="row head " id="highlight">
				<div className="col-sm-12">
					<h5>1. Որքանո՞վ է հավանական, որ խորհուրդ կտաք Ձեր ընկերոջը մասնակցել մեր դասընթացներին։
					</h5>
					<p> 0 - խորհուրդ չեմ տա</p>
					<span>{rangInp}</span>
					<input type='range'
					       onChange={(e) => setRangInp(e.target.value)}
					       value={rangInp}
					       required={true}
					       min='0'
					       max='100'/>
					<p> 100 - միանշանակ խորհուրդ կտամ </p>
				</div>
			</div>
			<div className="row ardyoq">
				<div className="col-sm-12">
					<h5>2. Արդյո՞ք գոհ եք մեր դասավանդող բոլոր մասնագետներից։</h5>
					{headerYesOrNOt.map(v => (
						<div className="form-check" id="hoverinp" key={v.id}>
							<label className="form-check-label">
								<input
									type="radio"
									className="form-check-input"
									name={v.name}
									checked={v.checked}
									required={true}
									onChange={(e) => checkedOr(v, v.id)}
								/>{v.title}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className="row nsheq">
				<div className="col-sm-12">
					<h5>3. Նշե՛ք Ձեր կարծիքով լավագույն դասավանդող մասնագետին։</h5>
					<div className='teacher__image_block'>
						{teacherImg.map((v, i) => (
							<img
								key={i}
								src={v.path} alt="___"
								style={{border: `3px solid ${v.color}`}}
								onClick={() => imageClick(i)}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)

}

export default ContainerHeader;
