# `drugeval`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugeval_id | int(11) | NO | PRI | 0 |  |  |
| genericname | varchar(100) | YES | MUL | NULL |  |  |
| topicnumber | int(11) | YES |  | NULL |  |  |
| topicname | varchar(150) | YES | MUL | NULL |  |  |
| data | longblob | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| drugeval_head_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| genericname | genericname | no | 1 |
| ix_drugeval_hid | drugeval_head_id | no | 1 |
| ix_genericname_topicname_unique | genericname | yes | 1 |
| ix_genericname_topicname_unique | topicname | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| last_update | last_update | no | 1 |
| PRIMARY | drugeval_id | yes | 1 |
| topicname | topicname | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugeval_id": 0,
    "genericname": "METFORMIN",
    "topicnumber": 0,
    "topicname": "DRUG INFORMATION",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  },
  {
    "drugeval_id": 1,
    "genericname": "Aripiprazole",
    "topicnumber": 0,
    "topicname": "DRUG INFORMATION",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  },
  {
    "drugeval_id": 2,
    "genericname": "Aripiprazole",
    "topicnumber": 1,
    "topicname": "- OVERVIEW",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  },
  {
    "drugeval_id": 3,
    "genericname": "Aripiprazole",
    "topicnumber": 2,
    "topicname": "- DOSING INFORMATION",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  },
  {
    "drugeval_id": 4,
    "genericname": "Aripiprazole",
    "topicnumber": 3,
    "topicname": "- PHARMACOKINETICS",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  },
  {
    "drugeval_id": 5,
    "genericname": "Aripiprazole",
    "topicnumber": 4,
    "topicname": "- CAUTIONS",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  },
  {
    "drugeval_id": 6,
    "genericname": "Aripiprazole",
    "topicnumber": 5,
    "topicname": "- CLINICAL APPLICATIONS",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  },
  {
    "drugeval_id": 7,
    "genericname": "Aripiprazole",
    "topicnumber": 6,
    "topicname": "TOXICOLOGIC MANAGEMENTS",
    "data": null,
    "last_update": null,
    "staff": null,
    "hos_guid": null,
    "drugeval_head_id": null
  }
]
```
