# `emr_view_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emr_view_item_id | int(11) | NO | PRI | 0 |  |  |
| emr_view_item_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_emr_view_item_name | emr_view_item_name | yes | 1 |
| PRIMARY | emr_view_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emr_view_item_id": 1,
    "emr_view_item_name": "CC"
  },
  {
    "emr_view_item_id": 3,
    "emr_view_item_name": "HPI"
  },
  {
    "emr_view_item_id": 4,
    "emr_view_item_name": "PMH"
  },
  {
    "emr_view_item_id": 5,
    "emr_view_item_name": "PE"
  },
  {
    "emr_view_item_id": 6,
    "emr_view_item_name": "Diagnosis Text"
  },
  {
    "emr_view_item_id": 7,
    "emr_view_item_name": "Diagnosis ICD10"
  },
  {
    "emr_view_item_id": 8,
    "emr_view_item_name": "Treatment"
  },
  {
    "emr_view_item_id": 9,
    "emr_view_item_name": "Medication"
  }
]
```
