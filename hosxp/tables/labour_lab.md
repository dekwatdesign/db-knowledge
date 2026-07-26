# `labour_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_id | int(11) | NO | PRI | 0 |  |  |
| lab_name | varchar(150) | YES |  | NULL |  |  |
| normal_value | varchar(200) | YES |  | NULL |  |  |
| anc_lab_id | int(11) | YES |  | NULL |  |  |
| possible_value | text | YES |  | NULL |  |  |
| default_value | varchar(100) | YES |  | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "lab_id": 1,
    "lab_name": "VDRL",
    "normal_value": null,
    "anc_lab_id": null,
    "possible_value": null,
    "default_value": null,
    "lab_items_code": 178,
    "hos_guid": null
  },
  {
    "lab_id": 2,
    "lab_name": "Anti HIV",
    "normal_value": null,
    "anc_lab_id": null,
    "possible_value": null,
    "default_value": null,
    "lab_items_code": 142,
    "hos_guid": null
  },
  {
    "lab_id": 3,
    "lab_name": "HBsAg",
    "normal_value": null,
    "anc_lab_id": null,
    "possible_value": null,
    "default_value": null,
    "lab_items_code": 140,
    "hos_guid": null
  },
  {
    "lab_id": 4,
    "lab_name": "HCT",
    "normal_value": null,
    "anc_lab_id": null,
    "possible_value": null,
    "default_value": null,
    "lab_items_code": 61,
    "hos_guid": null
  },
  {
    "lab_id": 5,
    "lab_name": "Thallassemia",
    "normal_value": null,
    "anc_lab_id": null,
    "possible_value": null,
    "default_value": null,
    "lab_items_code": null,
    "hos_guid": null
  }
]
```
