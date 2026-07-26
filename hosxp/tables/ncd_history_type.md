# `ncd_history_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ncd_history_type_id | int(11) | NO | PRI | 0 |  |  |
| ncd_history_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ncd_history_type_name | ncd_history_type_name | yes | 1 |
| PRIMARY | ncd_history_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ncd_history_type_id": 0,
    "ncd_history_type_name": "ไม่เคยตรวจ",
    "hos_guid": "{16498050-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "ncd_history_type_id": 1,
    "ncd_history_type_name": "เคยตรวจ เป็นโรค",
    "hos_guid": "{1649826C-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "ncd_history_type_id": 2,
    "ncd_history_type_name": "เคยตรวจ ไม่เป็นโรค",
    "hos_guid": "{16498370-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "ncd_history_type_id": 9,
    "ncd_history_type_name": "ไม่ทราบ/ จำไม่ได้",
    "hos_guid": "{16498456-F61C-11DE-BFF4-00215E472B30}"
  }
]
```
