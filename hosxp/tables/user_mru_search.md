# `user_mru_search`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_mru_search_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| mru_key | varchar(200) | YES | MUL | NULL |  |  |
| mru_value | varchar(200) | YES |  | NULL |  |  |
| mru_unix_time | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id_key | officer_id | no | 1 |
| ix_id_key | mru_key | no | 2 |
| ix_id_key_index | mru_key | no | 1 |
| ix_id_key_index | officer_id | no | 2 |
| PRIMARY | user_mru_search_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "user_mru_search_id": 1,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "530161154",
    "mru_unix_time": 1667227176
  },
  {
    "user_mru_search_id": 2,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "530161154",
    "mru_unix_time": 1688546390
  },
  {
    "user_mru_search_id": 3,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "530161154",
    "mru_unix_time": 1688546732
  },
  {
    "user_mru_search_id": 4,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "530161154",
    "mru_unix_time": 1700573477
  },
  {
    "user_mru_search_id": 5,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "580001508",
    "mru_unix_time": 1700573775
  },
  {
    "user_mru_search_id": 6,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "580001508",
    "mru_unix_time": 1700574010
  },
  {
    "user_mru_search_id": 7,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "530161154",
    "mru_unix_time": 1703071274
  },
  {
    "user_mru_search_id": 8,
    "officer_id": 0,
    "mru_key": "patient",
    "mru_value": "530161154",
    "mru_unix_time": 1703596156
  }
]
```
