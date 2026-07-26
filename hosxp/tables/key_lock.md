# `key_lock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| key_code | varchar(150) | NO | PRI |  |  |  |
| lock_date_time | datetime | YES | MUL | NULL |  |  |
| lock_pc | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code_pc | key_code | no | 1 |
| ix_code_pc | lock_pc | no | 2 |
| ix_lock_date_time | lock_date_time | no | 1 |
| PRIMARY | key_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "key_code": "PHR:670208070727",
    "lock_date_time": "2026-07-22 01:54:28",
    "lock_pc": "DMH-TELEMEDICIN"
  },
  {
    "key_code": "PHR:670208072817",
    "lock_date_time": "2024-02-16 12:49:35",
    "lock_pc": "A56-0114"
  },
  {
    "key_code": "PHR:670208080000",
    "lock_date_time": "2026-07-22 01:55:15",
    "lock_pc": "DMH-TELEMEDICIN"
  },
  {
    "key_code": "PHR:670208082724",
    "lock_date_time": "2024-02-16 13:03:55",
    "lock_pc": "A56-0114"
  },
  {
    "key_code": "PHR:670208082739",
    "lock_date_time": "2024-02-16 13:05:30",
    "lock_pc": "A56-0114"
  },
  {
    "key_code": "PHR:670208083000",
    "lock_date_time": "2026-06-14 19:03:35",
    "lock_pc": "DMH-TELEMEDICIN"
  },
  {
    "key_code": "PHR:670208083002",
    "lock_date_time": "2026-06-14 19:03:37",
    "lock_pc": "DMH-TELEMEDICIN"
  },
  {
    "key_code": "PHR:670208083004",
    "lock_date_time": "2026-06-14 19:03:42",
    "lock_pc": "DMH-TELEMEDICIN"
  }
]
```
