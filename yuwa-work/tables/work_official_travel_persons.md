# `work_official_travel_persons`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| travel_id | int | NO | MUL | NULL |  | FK → work_official_travel.id |
| person_name | varchar(500) | YES |  | NULL |  | ชื่อ-สกุลผู้เข้าร่วม |
| person_gtw_user_id | int | YES | MUL | NULL |  | gtw_user_id (users.id) ของผู้เข้าร่วม |
| external_person_id | int | YES | MUL | NULL |  | FK → work_external_persons.id (NULL = เป็นบุคลากรในระบบ) |
| sort_order | int | YES |  | 0 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_external_person_id | external_person_id | no | 1 |
| idx_person_gtw_user_id | person_gtw_user_id | no | 1 |
| idx_travel_id | travel_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| travel_id | `work_official_travel.id` | fk_travel_persons_travel_id |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "travel_id": 1,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 301,
    "external_person_id": null,
    "sort_order": 0
  },
  {
    "id": 2,
    "travel_id": 1,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 272,
    "external_person_id": null,
    "sort_order": 1
  },
  {
    "id": 3,
    "travel_id": 2,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 74,
    "external_person_id": null,
    "sort_order": 0
  },
  {
    "id": 4,
    "travel_id": 2,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 112,
    "external_person_id": null,
    "sort_order": 1
  },
  {
    "id": 5,
    "travel_id": 2,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 100,
    "external_person_id": null,
    "sort_order": 2
  },
  {
    "id": 6,
    "travel_id": 3,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 113,
    "external_person_id": null,
    "sort_order": 0
  },
  {
    "id": 7,
    "travel_id": 3,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 114,
    "external_person_id": null,
    "sort_order": 1
  },
  {
    "id": 8,
    "travel_id": 4,
    "person_name": "[MASKED_FULLNAME]",
    "person_gtw_user_id": 103,
    "external_person_id": null,
    "sort_order": 0
  }
]
```
