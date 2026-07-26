# `person_wbc_post_care_result_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_wbc_post_care_result_type_id | int(11) | NO | PRI | 0 |  |  |
| person_wbc_post_care_result_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_wbc_post_care_result_type_name | person_wbc_post_care_result_type_name | yes | 1 |
| PRIMARY | person_wbc_post_care_result_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_wbc_post_care_result_type_id": 1,
    "person_wbc_post_care_result_type_name": "ปกติ",
    "hos_guid": null
  },
  {
    "person_wbc_post_care_result_type_id": 2,
    "person_wbc_post_care_result_type_name": "ผิดปกติ",
    "hos_guid": null
  },
  {
    "person_wbc_post_care_result_type_id": 3,
    "person_wbc_post_care_result_type_name": "ไม่ทราบ",
    "hos_guid": null
  }
]
```
