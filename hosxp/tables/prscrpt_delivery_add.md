# `prscrpt_delivery_add`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_add_id | int(11) | NO | PRI | 0 |  |  |
| prscrpt_delivery_add_number | varchar(100) | YES |  | NULL |  |  |
| prscrpt_delivery_add_moo | varchar(50) | YES |  | NULL |  |  |
| prscrpt_delivery_add_soi | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_add_road | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_add_chw | char(2) | YES |  | NULL |  |  |
| prscrpt_delivery_add_amp | char(2) | YES |  | NULL |  |  |
| prscrpt_delivery_add_tmb | char(2) | YES |  | NULL |  |  |
| prscrpt_delivery_add_zipcode | varchar(5) | YES |  | NULL |  |  |
| prscrpt_delivery_add_used | char(1) | YES |  | NULL |  |  |
| prscrpt_delivery_add_type_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| prscrpt_delivery_add_receiver | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_add_note | text | YES |  | NULL |  |  |
| prscrpt_delivery_add_tel | varchar(20) | YES |  | NULL |  |  |
| prscrpt_delivery_company_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_delivery_add_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "prscrpt_delivery_add_id": 11,
    "prscrpt_delivery_add_number": "154",
    "prscrpt_delivery_add_moo": "4",
    "prscrpt_delivery_add_soi": "",
    "prscrpt_delivery_add_road": "",
    "prscrpt_delivery_add_chw": "14",
    "prscrpt_delivery_add_amp": "03",
    "prscrpt_delivery_add_tmb": "07",
    "prscrpt_delivery_add_zipcode": "13260",
    "prscrpt_delivery_add_used": "Y",
    "prscrpt_delivery_add_type_id": 1,
    "hn": "660000979",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "",
    "prscrpt_delivery_company_id": null
  },
  {
    "prscrpt_delivery_add_id": 12,
    "prscrpt_delivery_add_number": "46",
    "prscrpt_delivery_add_moo": "",
    "prscrpt_delivery_add_soi": "",
    "prscrpt_delivery_add_road": "สุขุมวิท31 ซ.อักษรลักษณ์",
    "prscrpt_delivery_add_chw": "11",
    "prscrpt_delivery_add_amp": "01",
    "prscrpt_delivery_add_tmb": "01",
    "prscrpt_delivery_add_zipcode": "10270",
    "prscrpt_delivery_add_used": "Y",
    "prscrpt_delivery_add_type_id": 1,
    "hn": "550001796",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "",
    "prscrpt_delivery_company_id": null
  },
  {
    "prscrpt_delivery_add_id": 13,
    "prscrpt_delivery_add_number": "35/1",
    "prscrpt_delivery_add_moo": "3",
    "prscrpt_delivery_add_soi": null,
    "prscrpt_delivery_add_road": null,
    "prscrpt_delivery_add_chw": "77",
    "prscrpt_delivery_add_amp": "02",
    "prscrpt_delivery_add_tmb": "07",
    "prscrpt_delivery_add_zipcode": "72150",
    "prscrpt_delivery_add_used": null,
    "prscrpt_delivery_add_type_id": null,
    "hn": "550001796",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "0614381749",
    "prscrpt_delivery_company_id": null
  },
  {
    "prscrpt_delivery_add_id": 14,
    "prscrpt_delivery_add_number": "99/50 ม.2",
    "prscrpt_delivery_add_moo": "",
    "prscrpt_delivery_add_soi": "",
    "prscrpt_delivery_add_road": "",
    "prscrpt_delivery_add_chw": "10",
    "prscrpt_delivery_add_amp": "23",
    "prscrpt_delivery_add_tmb": "03",
    "prscrpt_delivery_add_zipcode": "",
    "prscrpt_delivery_add_used": "Y",
    "prscrpt_delivery_add_type_id": 1,
    "hn": "530185649",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "",
    "prscrpt_delivery_company_id": null
  },
  {
    "prscrpt_delivery_add_id": 15,
    "prscrpt_delivery_add_number": "105",
    "prscrpt_delivery_add_moo": "",
    "prscrpt_delivery_add_soi": "",
    "prscrpt_delivery_add_road": "ซ.พุทธบูชา",
    "prscrpt_delivery_add_chw": "10",
    "prscrpt_delivery_add_amp": "49",
    "prscrpt_delivery_add_tmb": "01",
    "prscrpt_delivery_add_zipcode": "10140",
    "prscrpt_delivery_add_used": "Y",
    "prscrpt_delivery_add_type_id": 1,
    "hn": "530011454",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "",
    "prscrpt_delivery_company_id": null
  },
  {
    "prscrpt_delivery_add_id": 16,
    "prscrpt_delivery_add_number": "694",
    "prscrpt_delivery_add_moo": "17",
    "prscrpt_delivery_add_soi": "",
    "prscrpt_delivery_add_road": "",
    "prscrpt_delivery_add_chw": "11",
    "prscrpt_delivery_add_amp": "04",
    "prscrpt_delivery_add_tmb": "05",
    "prscrpt_delivery_add_zipcode": "10270",
    "prscrpt_delivery_add_used": "Y",
    "prscrpt_delivery_add_type_id": 1,
    "hn": "530146146",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "",
    "prscrpt_delivery_company_id": null
  },
  {
    "prscrpt_delivery_add_id": 17,
    "prscrpt_delivery_add_number": "186/4",
    "prscrpt_delivery_add_moo": "5",
    "prscrpt_delivery_add_soi": "",
    "prscrpt_delivery_add_road": "",
    "prscrpt_delivery_add_chw": "11",
    "prscrpt_delivery_add_amp": "04",
    "prscrpt_delivery_add_tmb": "02",
    "prscrpt_delivery_add_zipcode": "10130",
    "prscrpt_delivery_add_used": "Y",
    "prscrpt_delivery_add_type_id": 1,
    "hn": "560000162",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "",
    "prscrpt_delivery_company_id": null
  },
  {
    "prscrpt_delivery_add_id": 18,
    "prscrpt_delivery_add_number": "144",
    "prscrpt_delivery_add_moo": "5",
    "prscrpt_delivery_add_soi": "",
    "prscrpt_delivery_add_road": "",
    "prscrpt_delivery_add_chw": "30",
    "prscrpt_delivery_add_amp": "21",
    "prscrpt_delivery_add_tmb": "10",
    "prscrpt_delivery_add_zipcode": "30130",
    "prscrpt_delivery_add_used": "Y",
    "prscrpt_delivery_add_type_id": 1,
    "hn": "620001290",
    "prscrpt_delivery_add_receiver": "[MASKED_FULLNAME]",
    "prscrpt_delivery_add_note": null,
    "prscrpt_delivery_add_tel": "",
    "prscrpt_delivery_company_id": null
  }
]
```
