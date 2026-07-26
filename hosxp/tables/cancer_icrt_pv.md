# `cancer_icrt_pv`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_icrt_pv_id | int(11) | NO | PRI | 0 |  |  |
| cancer_icrt_pv_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_icrt_pv_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cancer_icrt_pv_id": 1,
    "cancer_icrt_pv_name": "infitative lesion",
    "hos_guid": null
  },
  {
    "cancer_icrt_pv_id": 2,
    "cancer_icrt_pv_name": "exophytic lesion",
    "hos_guid": null
  },
  {
    "cancer_icrt_pv_id": 3,
    "cancer_icrt_pv_name": "ulcerative lesion",
    "hos_guid": null
  },
  {
    "cancer_icrt_pv_id": 4,
    "cancer_icrt_pv_name": "No lesion",
    "hos_guid": null
  }
]
```
