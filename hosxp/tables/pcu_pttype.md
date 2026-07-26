# `pcu_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype | char(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |
| pcode | char(2) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| nhso_code | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | pttype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype": "00",
    "name": "ข้าราชการและ/หรือพนง.รัฐวิสาหกิจ",
    "pcode": "A2",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype": "02",
    "name": "ประกันสังคม",
    "pcode": "A7",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype": "51",
    "name": "คนต่างด้าวที่ขึ้นทะเบียน",
    "pcode": "AH",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype": "52",
    "name": "ต่างด้าว ที่ไม่ขึ้นทะเบียน",
    "pcode": "AH",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype": "65",
    "name": "บุคคลในครอบครัวของผู้บริหารโรงเรียนและครูของโรงเรียนเอกชนที่สอนศาสนาอิสลาม",
    "pcode": "AF",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype": "67",
    "name": "ผู้ได้รับพระราชทานเหรียญพิทักษ์เสรีชน",
    "pcode": "AE",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype": "68",
    "name": "ผู้บริจาคโลหิต ตั้งแต่ 18 ครั้ง ขึ้นไป",
    "pcode": "AB",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype": "71",
    "name": "เด็ก 0 - 12 ปี",
    "pcode": "AA",
    "paidst": null,
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
