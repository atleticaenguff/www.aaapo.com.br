export const onServiceWorkerUpdateReady = () => {
  window.alert(
    `Atualização disponível! A página será recarregada para exibir a versão mais recente.`
  )
  window.location.reload()
}
