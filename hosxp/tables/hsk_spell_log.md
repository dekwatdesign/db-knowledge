# `hsk_spell_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| spell_id | int(1) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| id_staff | varchar(20) | NO | PRI |  |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id_staff | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "spell_id": 1,
    "vstdate": "2024-08-27",
    "vsttime": "11:44:23",
    "id_staff": "regis1",
    "d_update": "2024-08-27 11:44:23"
  },
  {
    "spell_id": 1,
    "vstdate": "2026-06-03",
    "vsttime": "14:26:09",
    "id_staff": "",
    "d_update": "2026-06-03 14:26:09"
  },
  {
    "spell_id": 2,
    "vstdate": "2026-01-19",
    "vsttime": "16:40:43",
    "id_staff": "chatchawal",
    "d_update": "2026-01-19 16:40:43"
  },
  {
    "spell_id": 1,
    "vstdate": "2026-05-07",
    "vsttime": "10:08:30",
    "id_staff": "yuwa293",
    "d_update": "2026-05-07 10:08:30"
  },
  {
    "spell_id": 1,
    "vstdate": "2025-03-17",
    "vsttime": "14:44:24",
    "id_staff": "yuwa166",
    "d_update": "2025-03-17 14:44:24"
  },
  {
    "spell_id": 1,
    "vstdate": "2026-05-07",
    "vsttime": "15:42:07",
    "id_staff": "yuwa316",
    "d_update": "2026-05-07 15:42:07"
  },
  {
    "spell_id": 1,
    "vstdate": "2026-05-29",
    "vsttime": "10:20:01",
    "id_staff": "yuwa420",
    "d_update": "2026-05-29 10:20:01"
  },
  {
    "spell_id": 1,
    "vstdate": "2026-06-01",
    "vsttime": "9:35:45",
    "id_staff": "yuwa231",
    "d_update": "2026-06-01 09:35:45"
  }
]
```
