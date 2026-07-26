# `opd_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_department_id | int(11) | NO | PRI | 0 |  |  |
| opd_department_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| remark | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_opd_department_name | opd_department_name | yes | 1 |
| PRIMARY | opd_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "opd_department_id": 1,
    "opd_department_name": "เวชระเบียน",
    "hos_guid": null,
    "remark": null
  },
  {
    "opd_department_id": 2,
    "opd_department_name": "จุดคัดกรอง",
    "hos_guid": null,
    "remark": null
  }
]
```
