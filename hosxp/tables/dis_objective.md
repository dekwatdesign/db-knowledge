# `dis_objective`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_objective_id | int(11) | NO | PRI | 0 |  |  |
| dis_objective_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_objective_name | dis_objective_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_objective_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dis_objective_id": 1,
    "dis_objective_name": "เพื่อแก้ปัญหาผู้ป่วย",
    "hos_guid": null
  },
  {
    "dis_objective_id": 2,
    "dis_objective_name": "เพื่อประโยชน์ในการปฏิบัติงาน",
    "hos_guid": null
  },
  {
    "dis_objective_id": 3,
    "dis_objective_name": "เพื่อเพิ่มเติมความรู้",
    "hos_guid": null
  },
  {
    "dis_objective_id": 4,
    "dis_objective_name": "เพื่อศึกษา/วิจัย",
    "hos_guid": null
  },
  {
    "dis_objective_id": 5,
    "dis_objective_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
