# `doctor_order_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_order_print_code | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| doctor_order_print_date_time | datetime | YES | MUL | NULL |  |  |
| patient_name | varchar(150) | YES |  | NULL |  |  |
| drug_name | varchar(150) | YES |  | NULL |  |  |
| qty_name | varchar(150) | YES |  | NULL |  |  |
| line1 | varchar(150) | YES |  | NULL |  |  |
| line2 | varchar(150) | YES |  | NULL |  |  |
| line3 | varchar(150) | YES |  | NULL |  |  |
| line4 | varchar(150) | YES |  | NULL |  |  |
| shortlist | varchar(150) | YES |  | NULL |  |  |
| print_status | char(1) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| print_server | varchar(50) | YES | MUL | NULL |  |  |
| item_price | double(15,3) | YES |  | NULL |  |  |
| qty_int | int(11) | YES |  | NULL |  |  |
| patient_age | varchar(30) | YES |  | NULL |  |  |
| patient_pttype_name | varchar(100) | YES |  | NULL |  |  |
| patient_address | varchar(200) | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| diagnosis_name | varchar(250) | YES |  | NULL |  |  |
| patient_type | varchar(20) | YES |  | NULL |  |  |
| print_date | date | YES |  | NULL |  |  |
| print_time | time | YES |  | NULL |  |  |
| ward_name | varchar(150) | YES |  | NULL |  |  |
| bed_no | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| print_mode | tinyint(4) | YES | MUL | NULL |  |  |
| rx_queue | int(11) | YES | MUL | NULL |  |  |
| item_no | int(11) | YES |  | NULL |  |  |
| dep_name | varchar(50) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| print_count | int(11) | YES |  | NULL |  |  |
| line5 | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| med_plan_number | int(11) | YES |  | NULL |  |  |
| plan_begindate | date | YES |  | NULL |  |  |
| plan_enddate | date | YES |  | NULL |  |  |
| doph_id | int(11) | YES | MUL | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| qr_code | varchar(250) | YES |  | NULL |  |  |
| summary_qr_code | text | YES |  | NULL |  |  |
| location_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor_order_print_date_time | doctor_order_print_date_time | no | 1 |
| ix_dophid | doph_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn_print_mode | vn | no | 1 |
| ix_vn_print_mode | print_mode | no | 2 |
| ix_vn_print_mode_index | print_mode | no | 1 |
| ix_vn_print_mode_index | vn | no | 2 |
| PRIMARY | doctor_order_print_code | yes | 1 |
| print_server | print_server | no | 1 |
| print_status | print_status | no | 1 |
| rx_queue | rx_queue | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_order_print_code": 7570596,
    "vn": "690000708",
    "doctor_code": "0073",
    "doctor_order_print_date_time": "2026-06-03 11:31:56",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าบริการทางการพยาบาลผู้ป่วยในทั่วไป",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000042",
    "print_server": "",
    "item_price": 300.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "597/1 หมู่  ถ.ซ.อ่อน ถ.อ่อนนุช แขวง ประเวศ  เขตประเวศ จ.กรุงเทพมหานคร",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517707",
    "patient_type": "ใหม่ในปี",
    "print_date": "2026-06-03",
    "print_time": "11:31:56",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก006",
    "staff": null,
    "print_mode": 2,
    "rx_queue": null,
    "item_no": 2,
    "dep_name": null,
    "icode": "3001554",
    "orderstatus": null,
    "order_no": 517707,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{F16BD23E-28D7-4E3F-B194-0F853B94C309}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  },
  {
    "doctor_order_print_code": 7570595,
    "vn": "690000708",
    "doctor_code": "0073",
    "doctor_order_print_date_time": "2026-06-03 11:31:56",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าห้องและค่าอาหาร (เตียงสามัญ)",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000042",
    "print_server": "",
    "item_price": 400.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "597/1 หมู่  ถ.ซ.อ่อน ถ.อ่อนนุช แขวง ประเวศ  เขตประเวศ จ.กรุงเทพมหานคร",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517707",
    "patient_type": "ใหม่ในปี",
    "print_date": "2026-06-03",
    "print_time": "11:31:56",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก006",
    "staff": null,
    "print_mode": 2,
    "rx_queue": null,
    "item_no": 1,
    "dep_name": null,
    "icode": "3000442",
    "orderstatus": null,
    "order_no": 517707,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{0B3F8BBC-A197-4855-8448-62F67DC61ED3}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  },
  {
    "doctor_order_print_code": 7570593,
    "vn": "690000708",
    "doctor_code": "0073",
    "doctor_order_print_date_time": "2026-06-03 11:31:56",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าห้องและค่าอาหาร (เตียงสามัญ)",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000042",
    "print_server": "",
    "item_price": 400.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "597/1 หมู่  ถ.ซ.อ่อน ถ.อ่อนนุช แขวง ประเวศ  เขตประเวศ จ.กรุงเทพมหานคร",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517707",
    "patient_type": "ใหม่ในปี",
    "print_date": "2026-06-03",
    "print_time": "11:31:56",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก006",
    "staff": null,
    "print_mode": 1,
    "rx_queue": null,
    "item_no": 1,
    "dep_name": null,
    "icode": "3000442",
    "orderstatus": null,
    "order_no": 517707,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{0B3F8BBC-A197-4855-8448-62F67DC61ED3}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  },
  {
    "doctor_order_print_code": 7570594,
    "vn": "690000708",
    "doctor_code": "0073",
    "doctor_order_print_date_time": "2026-06-03 11:31:56",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าบริการทางการพยาบาลผู้ป่วยในทั่วไป",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000042",
    "print_server": "",
    "item_price": 300.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "597/1 หมู่  ถ.ซ.อ่อน ถ.อ่อนนุช แขวง ประเวศ  เขตประเวศ จ.กรุงเทพมหานคร",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517707",
    "patient_type": "ใหม่ในปี",
    "print_date": "2026-06-03",
    "print_time": "11:31:56",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก006",
    "staff": null,
    "print_mode": 1,
    "rx_queue": null,
    "item_no": 2,
    "dep_name": null,
    "icode": "3001554",
    "orderstatus": null,
    "order_no": 517707,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{F16BD23E-28D7-4E3F-B194-0F853B94C309}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  },
  {
    "doctor_order_print_code": 7570602,
    "vn": "690000715",
    "doctor_code": "0072",
    "doctor_order_print_date_time": "2026-06-03 11:33:30",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าห้องและค่าอาหาร (เตียงสามัญ)",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000513",
    "print_server": "",
    "item_price": 400.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "51/17 หมู่ 1 ถ.หอพักR&U ซ.9 ต.บ้านสวน  อ.เมืองชลบุรี จ.ชลบุรี",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517710",
    "patient_type": "เก่าในปี",
    "print_date": "2026-06-03",
    "print_time": "11:33:30",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก002",
    "staff": null,
    "print_mode": 2,
    "rx_queue": null,
    "item_no": 2,
    "dep_name": null,
    "icode": "3000442",
    "orderstatus": null,
    "order_no": 517710,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{D623BCED-C4BA-4C6F-B917-DB52494E9802}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  },
  {
    "doctor_order_print_code": 7570601,
    "vn": "690000715",
    "doctor_code": "0072",
    "doctor_order_print_date_time": "2026-06-03 11:33:30",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าบริการทางการพยาบาลผู้ป่วยในทั่วไป",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000513",
    "print_server": "",
    "item_price": 300.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "51/17 หมู่ 1 ถ.หอพักR&U ซ.9 ต.บ้านสวน  อ.เมืองชลบุรี จ.ชลบุรี",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517710",
    "patient_type": "เก่าในปี",
    "print_date": "2026-06-03",
    "print_time": "11:33:30",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก002",
    "staff": null,
    "print_mode": 2,
    "rx_queue": null,
    "item_no": 1,
    "dep_name": null,
    "icode": "3001554",
    "orderstatus": null,
    "order_no": 517710,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{25C3D401-C56F-4882-AB51-CF83E1EC6FBE}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  },
  {
    "doctor_order_print_code": 7570599,
    "vn": "690000715",
    "doctor_code": "0072",
    "doctor_order_print_date_time": "2026-06-03 11:33:29",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าบริการทางการพยาบาลผู้ป่วยในทั่วไป",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000513",
    "print_server": "",
    "item_price": 300.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "51/17 หมู่ 1 ถ.หอพักR&U ซ.9 ต.บ้านสวน  อ.เมืองชลบุรี จ.ชลบุรี",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517710",
    "patient_type": "เก่าในปี",
    "print_date": "2026-06-03",
    "print_time": "11:33:29",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก002",
    "staff": null,
    "print_mode": 1,
    "rx_queue": null,
    "item_no": 1,
    "dep_name": null,
    "icode": "3001554",
    "orderstatus": null,
    "order_no": 517710,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{25C3D401-C56F-4882-AB51-CF83E1EC6FBE}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  },
  {
    "doctor_order_print_code": 7570600,
    "vn": "690000715",
    "doctor_code": "0072",
    "doctor_order_print_date_time": "2026-06-03 11:33:29",
    "patient_name": "[MASKED_FULLNAME]",
    "drug_name": "ค่าห้องและค่าอาหาร (เตียงสามัญ)",
    "qty_name": "1",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "shortlist": "",
    "print_status": "N",
    "hn": "690000513",
    "print_server": "",
    "item_price": 400.0,
    "qty_int": 1,
    "patient_age": null,
    "patient_pttype_name": "บัตรทอง30บาท(จ่ายเต็ม)",
    "patient_address": "51/17 หมู่ 1 ถ.หอพักR&U ซ.9 ต.บ้านสวน  อ.เมืองชลบุรี จ.ชลบุรี",
    "doctor_name": "[MASKED_FULLNAME]",
    "diagnosis_name": "517710",
    "patient_type": "เก่าในปี",
    "print_date": "2026-06-03",
    "print_time": "11:33:29",
    "ward_name": "หอผู้ป่วยหนักจิตเวชเด็กและวัยรุ่น",
    "bed_no": "ก002",
    "staff": null,
    "print_mode": 1,
    "rx_queue": null,
    "item_no": 2,
    "dep_name": null,
    "icode": "3000442",
    "orderstatus": null,
    "order_no": 517710,
    "pttype": null,
    "print_count": null,
    "line5": "",
    "hos_guid": "{D623BCED-C4BA-4C6F-B917-DB52494E9802}",
    "med_plan_number": null,
    "plan_begindate": null,
    "plan_enddate": null,
    "doph_id": null,
    "discount": null,
    "qr_code": null,
    "summary_qr_code": null,
    "location_code": null
  }
]
```
