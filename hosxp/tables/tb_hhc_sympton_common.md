# `tb_hhc_sympton_common`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_sympton_common_id | int(11) | NO | PRI | 0 |  |  |
| tb_hhc_sympton_common_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_sympton_common_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "tb_hhc_sympton_common_id": 1,
    "tb_hhc_sympton_common_name": "ไอมาก",
    "hos_guid": null
  },
  {
    "tb_hhc_sympton_common_id": 2,
    "tb_hhc_sympton_common_name": "ไอน้อยลง",
    "hos_guid": null
  },
  {
    "tb_hhc_sympton_common_id": 3,
    "tb_hhc_sympton_common_name": "ปกติ",
    "hos_guid": null
  },
  {
    "tb_hhc_sympton_common_id": 4,
    "tb_hhc_sympton_common_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
