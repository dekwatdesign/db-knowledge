# `person_nutrition_food_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_nutrition_food_type_id | int(11) | NO | PRI | 0 |  |  |
| person_nutrition_food_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_nutrition_food_type_name | person_nutrition_food_type_name | yes | 1 |
| PRIMARY | person_nutrition_food_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "person_nutrition_food_type_id": 1,
    "person_nutrition_food_type_name": "นมแม่อย่างเดียว",
    "hos_guid": null
  },
  {
    "person_nutrition_food_type_id": 2,
    "person_nutrition_food_type_name": "นมแม่และน้ำ",
    "hos_guid": null
  },
  {
    "person_nutrition_food_type_id": 3,
    "person_nutrition_food_type_name": "นมแม่และนมผสม",
    "hos_guid": null
  },
  {
    "person_nutrition_food_type_id": 4,
    "person_nutrition_food_type_name": "นมผสมอย่างเดียว",
    "hos_guid": null
  }
]
```
