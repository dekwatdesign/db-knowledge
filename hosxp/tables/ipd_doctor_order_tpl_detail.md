# `ipd_doctor_order_tpl_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_tpl_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_tpl_id | int(11) | YES | MUL | NULL |  |  |
| order_text | text | YES |  | NULL |  |  |
| short_order_text | text | YES |  | NULL |  |  |
| is_continue | char(1) | YES |  | NULL |  |  |
| is_immediate | char(1) | YES |  | NULL |  |  |
| ipd_doctor_order_type_id | int(11) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_doctor_order_tpl_id | ipd_doctor_order_tpl_id | no | 1 |
| PRIMARY | ipd_doctor_order_tpl_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_doctor_order_tpl_detail_id": 28,
    "ipd_doctor_order_tpl_id": 4,
    "order_text": "- Regular Diet\r\n- Record V/S\r\n- Suicidal precaution",
    "short_order_text": null,
    "is_continue": "Y",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 4,
    "display_order": 0
  },
  {
    "ipd_doctor_order_tpl_detail_id": 27,
    "ipd_doctor_order_tpl_id": 4,
    "order_text": "Admit IPD5",
    "short_order_text": null,
    "is_continue": "N",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 4,
    "display_order": 0
  },
  {
    "ipd_doctor_order_tpl_detail_id": 64,
    "ipd_doctor_order_tpl_id": 2,
    "order_text": "- Symbicort terbutaline พ่น 1 puff BID เช้า ก่อนนอน\r\n- Avamys พ่นจมูก 2 puff BID เช้า ก่อนนอน\r\n- Natear eyes drop หยอดตา 2 ข้าง ข้างละ 1 หยด BID เช้า ก่อนนอน\r\n- Olopatadine 0.1% eye drop 1 หยด BID เช้า ก่อนนอน\r\n- Tropin 0.01% eye drop 1 หยด ก่อนนอน",
    "short_order_text": null,
    "is_continue": "Y",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 4,
    "display_order": 0
  },
  {
    "ipd_doctor_order_tpl_detail_id": 62,
    "ipd_doctor_order_tpl_id": 2,
    "order_text": "Admit IPD5",
    "short_order_text": null,
    "is_continue": "N",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 4,
    "display_order": 0
  },
  {
    "ipd_doctor_order_tpl_detail_id": 63,
    "ipd_doctor_order_tpl_id": 2,
    "order_text": "- Regular diet\r\n- Record V/S",
    "short_order_text": null,
    "is_continue": "Y",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 4,
    "display_order": 0
  },
  {
    "ipd_doctor_order_tpl_detail_id": 61,
    "ipd_doctor_order_tpl_id": 2,
    "order_text": "Haloperidol Inj. 5 mg/ml แอมพูล\r\nIM 2.5 มิลลิกรัม  เวลาก้าวร้าว ทุก 6 ชั่วโมง [Locked]",
    "short_order_text": "Haloperidol Inj. 5 mg/ml แอมพูล >IM 2.5 มิลลิกรัม  เวลาก้าวร้าว ทุก 6 ชั่วโมง [Locked]",
    "is_continue": "Y",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 1,
    "display_order": 1
  },
  {
    "ipd_doctor_order_tpl_detail_id": 60,
    "ipd_doctor_order_tpl_id": 2,
    "order_text": "Risperidone GPO(สีขาว) 1 mg เม็ด\r\nรับประทาน ครึ่งเม็ด  เวลาก้าวร้าว [Locked]",
    "short_order_text": "Risperidone GPO(สีขาว) 1 mg เม็ด >รับประทาน ครึ่งเม็ด  เวลาก้าวร้าว [Locked]",
    "is_continue": "Y",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 1,
    "display_order": 1
  },
  {
    "ipd_doctor_order_tpl_detail_id": 59,
    "ipd_doctor_order_tpl_id": 2,
    "order_text": "Cetirizine (ALEREST) 10 mg เม็ด\r\nรับประทาน 1 เม็ด  ก่อนนอน",
    "short_order_text": "Cetirizine (ALEREST) 10 mg เม็ด >รับประทาน 1 เม็ด  ก่อนนอน",
    "is_continue": "Y",
    "is_immediate": null,
    "ipd_doctor_order_type_id": 1,
    "display_order": 1
  }
]
```
