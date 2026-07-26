# `operation_facility`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_facility_id | int(11) | NO | PRI | 0 |  |  |
| operation_facility_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_facility_name | operation_facility_name | yes | 1 |
| PRIMARY | operation_facility_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "operation_facility_id": 2,
    "operation_facility_name": "Changing rooms"
  },
  {
    "operation_facility_id": 7,
    "operation_facility_name": "Discharge"
  },
  {
    "operation_facility_id": 5,
    "operation_facility_name": "General recovery"
  },
  {
    "operation_facility_id": 4,
    "operation_facility_name": "Operating room suit"
  },
  {
    "operation_facility_id": 3,
    "operation_facility_name": "Preoperative holding"
  },
  {
    "operation_facility_id": 6,
    "operation_facility_name": "Step down recovery"
  },
  {
    "operation_facility_id": 1,
    "operation_facility_name": "Waiting area"
  }
]
```
