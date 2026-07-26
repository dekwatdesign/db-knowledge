# `cancer_home_visit_consider`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_home_visit_consider_id | int(11) | NO | PRI | 0 |  |  |
| cancer_home_visit_consider_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_home_visit_consider_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_home_visit_consider_id": 1,
    "cancer_home_visit_consider_name": "เยี่ยมโดย รพ.",
    "hos_guid": null
  },
  {
    "cancer_home_visit_consider_id": 2,
    "cancer_home_visit_consider_name": "เยี่ยมโดย รพ.สต.",
    "hos_guid": null
  },
  {
    "cancer_home_visit_consider_id": 3,
    "cancer_home_visit_consider_name": "ไม่เยี่ยม",
    "hos_guid": null
  }
]
```
