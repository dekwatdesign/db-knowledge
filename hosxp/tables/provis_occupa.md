# `provis_occupa`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(4) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "0110",
    "name": "ทหารชั้นสัญญาบัตร",
    "hos_guid": null
  },
  {
    "code": "0210",
    "name": "ทหารชั้นประทวน",
    "hos_guid": null
  },
  {
    "code": "0310",
    "name": "ทหารยศอื่นๆ",
    "hos_guid": null
  },
  {
    "code": "1111",
    "name": "ข้าราชการการเมืองและนักการเมือง",
    "hos_guid": null
  },
  {
    "code": "1112",
    "name": "ข้าราชการระดับอาวุโส : ผู้ปฏิบัติงานเกี่ยวกับการให้คำปรึกษาด้านนโยบาย งบประมาณ และระเบียบข้อบังคับต่างๆ แก่รัฐบาล",
    "hos_guid": null
  },
  {
    "code": "1113",
    "name": "กำนัน",
    "hos_guid": null
  },
  {
    "code": "1120",
    "name": "กรรมการผู้จัดการและผู้บริหารระดับสูงภาคเอกชน",
    "hos_guid": null
  },
  {
    "code": "1210",
    "name": "ผู้จัดการด้านบริการธุรกิจและบริหารจัดการ",
    "hos_guid": null
  }
]
```
