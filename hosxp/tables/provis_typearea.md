# `provis_typearea`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "code": "1",
    "name": "ที่อยู่ตามทะเบียนบ้านในเขตรับผิดชอบและอยู่จริง",
    "hos_guid": null
  },
  {
    "code": "2",
    "name": "ที่อยู่ตามทะเบียนบ้านในเขตรับผิดชอบและไม่อยู่",
    "hos_guid": null
  },
  {
    "code": "3",
    "name": "มาอาศัยอยู่ในเขตรับผิดชอบแต่ทะเบียนบ้านนอกเขตรับผิดชอบ",
    "hos_guid": null
  },
  {
    "code": "4",
    "name": "อาศัยอยู่นอกเขตรับผิดชอบ",
    "hos_guid": null
  }
]
```
