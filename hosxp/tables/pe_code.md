# `pe_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": 1,
    "doctor": "",
    "name": "ความพิการทางกาย,ปัญหาการได้ยิน,ปัญหาการมองเห็น,เด็กพิการ,CP",
    "hos_guid": null
  },
  {
    "code": 2,
    "doctor": "",
    "name": "อาการทางสมอง ,อาการชัก",
    "hos_guid": null
  },
  {
    "code": 3,
    "doctor": "",
    "name": "กระพริบตา",
    "hos_guid": null
  },
  {
    "code": 4,
    "doctor": "",
    "name": "เจ็บป่วยประจำ,ภูมิแพ้",
    "hos_guid": null
  },
  {
    "code": 5,
    "doctor": "",
    "name": "Hyperactive,ซน,อยู่ไม่นิ่ง,ลุกลี้ลุกลน",
    "hos_guid": null
  },
  {
    "code": 6,
    "doctor": "",
    "name": "Tic,กระตุก,ขยิบตา,ทำเสียงในลำคอ",
    "hos_guid": null
  },
  {
    "code": 7,
    "doctor": "",
    "name": "ปัสสาวะรดที่นอน",
    "hos_guid": null
  },
  {
    "code": 8,
    "doctor": "",
    "name": "อุจจาระราด",
    "hos_guid": null
  }
]
```
