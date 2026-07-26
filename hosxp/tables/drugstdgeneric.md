# `drugstdgeneric`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| genericname | varchar(150) | NO | PRI |  |  |  |
| genericgroup | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| genericgroup | genericgroup | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | genericname | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "genericname": "(Anna) ETHINYL ESTRADIOL30 MCG+ LEVONORGESTREL 150MCG(ANNA)",
    "genericgroup": "CONTRACEPTIVES",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "genericname": "-SIMVASTATIN",
    "genericgroup": "HYPOLIPIDAEMIC DRUGS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "genericname": "ABCIXIMAB",
    "genericgroup": "ANTI-PLATELET AGENT",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "genericname": "ACEBROPHYLLINE",
    "genericgroup": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "genericname": "ACEBUTOLOL",
    "genericgroup": "BETA BLOCKER",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "genericname": "ACECLOFENAC",
    "genericgroup": "NSAID",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "genericname": "ACEFYLLINE PIPERAZINE",
    "genericgroup": "PHENOTHIAZINE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "genericname": "ACEMETACIN",
    "genericgroup": "NSAID",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
