# `cancer_iv_flici_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_iv_flici_type_id | int(11) | NO | PRI | 0 |  |  |
| cancer_iv_flici_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_iv_flici_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_iv_flici_type_id": 1,
    "cancer_iv_flici_type_name": "0.9% NSS 1000 ml",
    "hos_guid": null
  },
  {
    "cancer_iv_flici_type_id": 2,
    "cancer_iv_flici_type_name": "5% NSS 1000 ml",
    "hos_guid": null
  },
  {
    "cancer_iv_flici_type_id": 3,
    "cancer_iv_flici_type_name": "5% D/(N/2) 1000 ml",
    "hos_guid": null
  }
]
```
