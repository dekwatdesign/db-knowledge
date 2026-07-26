# `gleave_permis_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PERMIS_LEVEL_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(255) | YES |  | NULL |  |  |
| NAME_PERSON | varchar(255) | YES |  | NULL |  |  |
| DEP_SUB_SUB_ID | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PERMIS_LEVEL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "PERMIS_LEVEL_ID": 4,
    "PERSON_ID": "53",
    "NAME_PERSON": "อนัญญา สินรัชตานันท์",
    "DEP_SUB_SUB_ID": "19",
    "updated_at": "2025-02-26 02:15:27",
    "created_at": "2022-10-19 06:19:37"
  },
  {
    "PERMIS_LEVEL_ID": 5,
    "PERSON_ID": "250",
    "NAME_PERSON": "กรองทอง ธารีเพียร",
    "DEP_SUB_SUB_ID": "4",
    "updated_at": "2023-07-21 08:40:31",
    "created_at": "2023-07-21 08:40:10"
  },
  {
    "PERMIS_LEVEL_ID": 6,
    "PERSON_ID": "131",
    "NAME_PERSON": "อารีย์ ชูศักดิ์",
    "DEP_SUB_SUB_ID": "43",
    "updated_at": "2023-07-21 08:40:57",
    "created_at": "2023-07-21 08:40:57"
  },
  {
    "PERMIS_LEVEL_ID": 8,
    "PERSON_ID": "295",
    "NAME_PERSON": "ดุษฏี จึงศิรกุลวิทย์",
    "DEP_SUB_SUB_ID": "1",
    "updated_at": "2026-02-13 05:00:55",
    "created_at": "2024-12-25 07:07:31"
  },
  {
    "PERMIS_LEVEL_ID": 10,
    "PERSON_ID": "57",
    "NAME_PERSON": "ชลทิพย์ กรัยวิเชียร",
    "DEP_SUB_SUB_ID": "22",
    "updated_at": "2025-02-26 02:07:11",
    "created_at": "2025-02-26 02:06:10"
  }
]
```
