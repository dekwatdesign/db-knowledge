# `work_prefix_name`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| gtw_prefix_id | varchar(11) | YES |  | NULL |  |  |
| prefix_name_en | varchar(255) | YES |  | NULL |  |  |
| prefix_name_en_description | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "gtw_prefix_id": null,
    "prefix_name_en": null,
    "prefix_name_en_description": null
  },
  {
    "id": 2,
    "gtw_prefix_id": "01",
    "prefix_name_en": "Mr.",
    "prefix_name_en_description": "Mr."
  },
  {
    "id": 3,
    "gtw_prefix_id": "02",
    "prefix_name_en": "Mrs.",
    "prefix_name_en_description": "Mrs."
  },
  {
    "id": 4,
    "gtw_prefix_id": "03",
    "prefix_name_en": "Miss",
    "prefix_name_en_description": "Miss"
  },
  {
    "id": 5,
    "gtw_prefix_id": "04",
    "prefix_name_en": "Dr.",
    "prefix_name_en_description": "Dr. (Medical Doctor - Male)"
  },
  {
    "id": 6,
    "gtw_prefix_id": "05",
    "prefix_name_en": "Dr.",
    "prefix_name_en_description": "Dr. (Dentist - Male)"
  },
  {
    "id": 7,
    "gtw_prefix_id": "06",
    "prefix_name_en": "Pharm.",
    "prefix_name_en_description": "Pharmacist (Male)"
  },
  {
    "id": 8,
    "gtw_prefix_id": "07",
    "prefix_name_en": "Act. Sub-Lt.",
    "prefix_name_en_description": "Acting Sub-Lieutenant (Male)"
  }
]
```
