# `icnp_classification`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icnp_classification_id | int(11) | NO | PRI | 0 |  |  |
| icnp_classification_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icnp_classification_name | icnp_classification_name | yes | 1 |
| PRIMARY | icnp_classification_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "icnp_classification_id": 1,
    "icnp_classification_name": "Convalescent illness",
    "hos_guid": null
  },
  {
    "icnp_classification_id": 2,
    "icnp_classification_name": "Moderate illness",
    "hos_guid": null
  },
  {
    "icnp_classification_id": 3,
    "icnp_classification_name": "Semi-critical illness",
    "hos_guid": null
  },
  {
    "icnp_classification_id": 4,
    "icnp_classification_name": "Critical illness",
    "hos_guid": null
  }
]
```
