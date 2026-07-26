# `cancer_site_treat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_site_treat_id | int(11) | NO | PRI | 0 |  |  |
| cancer_site_treat_name | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_site_treat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_site_treat_id": 1,
    "cancer_site_treat_name": "Thigh",
    "hos_guid": null
  },
  {
    "cancer_site_treat_id": 2,
    "cancer_site_treat_name": "Leg",
    "hos_guid": null
  },
  {
    "cancer_site_treat_id": 3,
    "cancer_site_treat_name": "Arm",
    "hos_guid": null
  },
  {
    "cancer_site_treat_id": 4,
    "cancer_site_treat_name": "Fore Arm",
    "hos_guid": null
  },
  {
    "cancer_site_treat_id": 5,
    "cancer_site_treat_name": "Foot",
    "hos_guid": null
  },
  {
    "cancer_site_treat_id": 6,
    "cancer_site_treat_name": "Groin",
    "hos_guid": null
  },
  {
    "cancer_site_treat_id": 7,
    "cancer_site_treat_name": "C Spine",
    "hos_guid": null
  },
  {
    "cancer_site_treat_id": 8,
    "cancer_site_treat_name": "T Spine",
    "hos_guid": null
  }
]
```
