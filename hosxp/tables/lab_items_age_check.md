# `lab_items_age_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_age_check_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| age_min | int(11) | YES |  | NULL |  |  |
| age_max | int(11) | YES | MUL | NULL |  |  |
| normal_male_min_value | double(15,3) | YES |  | NULL |  |  |
| normal_male_max_value | double(15,3) | YES |  | NULL |  |  |
| normal_female_min_value | double(15,3) | YES |  | NULL |  |  |
| normal_female_max_value | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_items_code | lab_items_code | no | 1 |
| ix_search | lab_items_code | no | 1 |
| ix_search | age_min | no | 2 |
| ix_search | age_max | no | 3 |
| ix_search_index | age_max | no | 1 |
| ix_search_index | age_min | no | 2 |
| ix_search_index | lab_items_code | no | 3 |
| PRIMARY | lab_items_age_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "lab_items_age_check_id": 1,
    "lab_items_code": 61,
    "age_min": 3,
    "age_max": 15,
    "normal_male_min_value": 32.0,
    "normal_male_max_value": 44.0,
    "normal_female_min_value": 32.0,
    "normal_female_max_value": 44.0,
    "hos_guid": null
  },
  {
    "lab_items_age_check_id": 2,
    "lab_items_code": 61,
    "age_min": 16,
    "age_max": 70,
    "normal_male_min_value": 40.0,
    "normal_male_max_value": 54.0,
    "normal_female_min_value": 37.0,
    "normal_female_max_value": 47.0,
    "hos_guid": null
  },
  {
    "lab_items_age_check_id": 3,
    "lab_items_code": 61,
    "age_min": 0,
    "age_max": 2,
    "normal_male_min_value": 32.0,
    "normal_male_max_value": 44.0,
    "normal_female_min_value": 32.0,
    "normal_female_max_value": 44.0,
    "hos_guid": null
  },
  {
    "lab_items_age_check_id": 4,
    "lab_items_code": 207,
    "age_min": 0,
    "age_max": 2,
    "normal_male_min_value": 10.0,
    "normal_male_max_value": 15.5,
    "normal_female_min_value": 10.0,
    "normal_female_max_value": 15.5,
    "hos_guid": null
  },
  {
    "lab_items_age_check_id": 5,
    "lab_items_code": 207,
    "age_min": 3,
    "age_max": 15,
    "normal_male_min_value": 10.0,
    "normal_male_max_value": 15.5,
    "normal_female_min_value": 10.0,
    "normal_female_max_value": 15.5,
    "hos_guid": null
  },
  {
    "lab_items_age_check_id": 6,
    "lab_items_code": 207,
    "age_min": 16,
    "age_max": 70,
    "normal_male_min_value": 13.0,
    "normal_male_max_value": 18.0,
    "normal_female_min_value": 12.0,
    "normal_female_max_value": 16.0,
    "hos_guid": null
  },
  {
    "lab_items_age_check_id": 7,
    "lab_items_code": 268,
    "age_min": 18,
    "age_max": 100,
    "normal_male_min_value": 20.0,
    "normal_male_max_value": 125.0,
    "normal_female_min_value": 20.0,
    "normal_female_max_value": 125.0,
    "hos_guid": null
  }
]
```
