# `tb_hhc_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_status_id | int(11) | NO | PRI | 0 |  |  |
| tb_hhc_status_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "tb_hhc_status_id": 1,
    "tb_hhc_status_name": "ยังไม่ได้เยี่ยมบ้าน",
    "hos_guid": null
  },
  {
    "tb_hhc_status_id": 2,
    "tb_hhc_status_name": "เยี่ยมบ้านแล้ว",
    "hos_guid": null
  }
]
```
