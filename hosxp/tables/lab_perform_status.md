# `lab_perform_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_perform_status_id | int(11) | NO | PRI | 0 |  |  |
| lab_perform_status_name | varchar(150) | YES | UNI | NULL |  |  |
| abort_price | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_perform_status_name | lab_perform_status_name | yes | 1 |
| PRIMARY | lab_perform_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "lab_perform_status_id": 1,
    "lab_perform_status_name": "รอผล",
    "abort_price": "N",
    "hos_guid": null
  },
  {
    "lab_perform_status_id": 2,
    "lab_perform_status_name": "รายงานผลแล้ว",
    "abort_price": "N",
    "hos_guid": null
  },
  {
    "lab_perform_status_id": 3,
    "lab_perform_status_name": "Reject",
    "abort_price": "Y",
    "hos_guid": null
  }
]
```
