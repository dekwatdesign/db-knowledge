# `labour_perineum_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| perineum_type_id | int(11) | NO | PRI | 0 |  |  |
| perineum_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_perineum_type_name | perineum_type_name | yes | 1 |
| PRIMARY | perineum_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "perineum_type_id": 1,
    "perineum_type_name": "ไม่ได้ตัด",
    "hos_guid": "{1A7D3A72-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "perineum_type_id": 2,
    "perineum_type_name": "median",
    "hos_guid": "{1A7D3E6A-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "perineum_type_id": 3,
    "perineum_type_name": "Rt  ML",
    "hos_guid": "{1A7D410B-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "perineum_type_id": 4,
    "perineum_type_name": "Lt  ML",
    "hos_guid": "{1A7D437D-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "perineum_type_id": 5,
    "perineum_type_name": "old  tear or SL tear",
    "hos_guid": "{1A7D45E5-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "perineum_type_id": 6,
    "perineum_type_name": "1  st degree  tear",
    "hos_guid": "{1A7D4843-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "perineum_type_id": 7,
    "perineum_type_name": "2 nd degree tear",
    "hos_guid": "{1A7D4AB0-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "perineum_type_id": 8,
    "perineum_type_name": "3 rd degree tear",
    "hos_guid": "{1A7D4D22-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
