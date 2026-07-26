# `anc_baby_lead`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_baby_lead_id | int(11) | NO | PRI | 0 |  |  |
| anc_baby_lead_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_baby_lead_name | anc_baby_lead_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_baby_lead_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "anc_baby_lead_id": 1,
    "anc_baby_lead_name": "HF",
    "hos_guid": null
  },
  {
    "anc_baby_lead_id": 2,
    "anc_baby_lead_name": "HE",
    "hos_guid": null
  },
  {
    "anc_baby_lead_id": 3,
    "anc_baby_lead_name": "HPE",
    "hos_guid": null
  }
]
```
