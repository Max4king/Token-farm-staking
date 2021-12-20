from brownie import accounts, config, SimpleStorage


def deploy_simple_storage():
    # Local account
    account = accounts[0]
    simple_storage = SimpleStorage.deploy({"from": account})
    store_value = simple_storage.retrieve()
    print(store_value)
    transaction = simple_storage.store(15, {"from": account})
    transaction.wait(1)
    updated_stored_value = simple_storage.retrieve()
    print(updated_stored_value)


"""    # make private keys as environment variable
    # account = accounts.load("creator-account")
    # print(account)

    # get key from .env file
    # account = accounts.add(os.getenv("PRIVATE_KEY"))
    # account = accounts.add(config["wallet"]["from_key"])
    # print(account)"""


def main():
    deploy_simple_storage()
