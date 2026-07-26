# `pttypegroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttypegroup_id | varchar(5) | NO | PRI |  |  |  |
| pttypegroup_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pttypegroup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttypegroup_id": "AH",
    "pttypegroup_name": "[AH] บัตรชั่วคราว"
  },
  {
    "pttypegroup_id": "AG",
    "pttypegroup_name": "[AG] บัตรผู้สูงอายุ"
  },
  {
    "pttypegroup_id": "AF",
    "pttypegroup_name": "[AF] พระภิกษุ ผู้นำศาสนา"
  },
  {
    "pttypegroup_id": "AE",
    "pttypegroup_name": "[AE] ทหารผ่านศึก"
  },
  {
    "pttypegroup_id": "A1",
    "pttypegroup_name": "[A1] จ่ายเงินเอง โดยไม่มีสิทธิเบิกคืน"
  },
  {
    "pttypegroup_id": "A2",
    "pttypegroup_name": "[A2] ใช้สิทธิเบิกหน่วยงานต้นสังกัด"
  },
  {
    "pttypegroup_id": "A3",
    "pttypegroup_name": "[A3] สิทธิลดหย่อน ประเภท ก"
  },
  {
    "pttypegroup_id": "A4",
    "pttypegroup_name": "[A4] สิทธิลดหย่อน ประเภท ข"
  }
]
```
